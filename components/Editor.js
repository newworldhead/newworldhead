import { useEffect, useRef } from "react"

export default function Editor({ onChange, loading, desc, value }) {

    const editorRef = useRef()
    const { CKEditor, ClassicEditor } = editorRef.current || {};

    useEffect(() => {
        editorRef.current = {
            CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
            ClassicEditor: require("@ckeditor/ckeditor5-build-classic")
        }
    }, [])

    return (
        <div>
            {loading ? (
                <CKEditor
                    type=""
                    name={desc}
                    editor={ClassicEditor}
                    data={value}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        // console.log({ event, editor, data })
                        onChange(data);
                    }}
                />
            ) : (
                <div>Editor loading</div>
            )}
        </div>
    )
}
