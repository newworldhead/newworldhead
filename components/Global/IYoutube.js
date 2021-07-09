export default function IYoutube({ embedId }) {
    return (
        <div className="flex flex-row items-center justify-center w-full">
            <iframe
                className="rounded w-full mx-4 mt-2"
                height="480"
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    )
}
