
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Youtube from "@tiptap/extension-youtube";

export default function TextEditor({  value, onChange }) {
 const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({ openOnClick: true }),
      Image,
    ],
    content: value || "<p>Wpisz tekst</p>",
    onUpdate: ({ editor }) => {
      if (onChange) onChange(editor.getHTML());
    },
  });

  const addLink = () => {
    let url = prompt("Wprowadź URL linku");
    if (!url) return;
    if (!/^https?:\/\//i.test(url)) url = "https://" + url;

    const text = prompt("Wpisz opis linku");
    if (!text) return;

    editor
      .chain()
      .focus()
      .insertContent({
        type: "text",
        text: text,
        marks: [
          {
            type: "link",
            attrs: { href: url, target: "_blank" },
          },
        ],
      })
      .run();
  };

  const addImage = () => {
    const url = prompt("Wprowadź URL obrazu");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

 const addYoutube = () => {
  const url = prompt(
    "Wklej link do filmu YouTube (np. https://www.youtube.com/watch?v=ID)"
  );
  if (!url) return;

  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
  if (!match) {
    alert("Niepoprawny link YouTube");
    return;
  }

  const videoId = match[1];

  editor
    .chain()
    .focus()
    .insertContent({
      type: 'iframe',
      attrs: { src: `https://www.youtube.com/embed/${videoId}` }
    })
    .run();
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
