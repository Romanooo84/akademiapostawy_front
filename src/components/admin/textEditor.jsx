import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Youtube from "@tiptap/extension-youtube";
import link from "../../link";

export default function TextEditor({ value, onChange, addPendingImage }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({ openOnClick: true }),
      Image,
      Youtube.configure({
        inline: false,
        width: 640,
        height: 360,
        modestBranding: true,
      }),
    ],
    content: value || "<p>Wpisz tekst</p>",
    onUpdate: ({ editor }) => {
      if (onChange) onChange(editor.getHTML());
    },
  });

  const addLink = () => {
    let url = prompt(`${link}images/`);
    if (!url) return;
    if (!/^https?:\/\//i.test(url)) url = "https://" + url;

    const text = prompt("Wpisz opis linku");
    if (!text) return;

    editor
      .chain()
      .focus()
      .insertContent({
        type: "text",
        text,
        marks: [{ type: "link", attrs: { href: url, target: "_blank" } }],
      })
      .run();
  };

  const addImage = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const localUrl = URL.createObjectURL(file);
      editor.chain().focus().setImage({ src: localUrl }).run();

      if (addPendingImage) addPendingImage(file, localUrl);
    };

    input.click();
  };

  const addYoutube = () => {
    const url = prompt("Wklej link do filmu YouTube");
    if (!url) return;

    editor.chain().focus().setYoutubeVideo({ src: url }).run();
  };

  if (!editor) return null;

  const Button = ({ command, children }) => (
    <button onClick={command} style={{ marginRight: 5 }}>
      {children}
    </button>
  );

  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <Button command={() => editor.chain().focus().toggleBold().run()}>B</Button>
        <Button command={() => editor.chain().focus().toggleItalic().run()}>I</Button>
        <Button command={addLink}>Dodaj link</Button>
        <Button command={addImage}>Dodaj obraz</Button>
        <Button command={addYoutube}>Dodaj wideo</Button>
      </div>
      <EditorContent
        editor={editor}
        style={{ border: "1px solid #ccc", padding: 10, minHeight: 200 }}
      />
    </div>
  );
}
