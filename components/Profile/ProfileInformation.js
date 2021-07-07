export default function ProfileInformation({ user, setRequested, submitHandler, requestedRemoval, editProfileRemoval }) {

    return (
        <div className="my-4 flex flex-col gap-1 tracking-wide">
            <p className="capitalize">Name: {user && user.username}</p>
            <p>Email: {user && user.email}</p>
            <div className="my-4 border-b border-gray-400"></div>

            {!requestedRemoval ? (
                <form onSubmit={submitHandler}>
                    <button
                        type="submit"
                        onClick={() => setRequested(true)}
                        className="
                            bg-red-400
                            px-2
                            py-2
                            inline-block
                            shadow-xl
                            tracking-wide
                            rounded
                            hover:shadow
                            focus:outline-none
                        ">
                        Request Profile Closure</button>
                </form>
            ) : (
                <form onSubmit={editProfileRemoval}>
                    <button
                        type="submit"
                        onClick={() => setRequested(true)}
                        className="
                            bg-red-400
                            px-2
                            py-2
                            w-full
                            md:w-60
                            inline-block
                            shadow-xl
                            tracking-wide
                            rounded
                            hover:shadow
                            focus:outline-none
                    ">Request Profile Clouser</button>
                </form>
            )}
        </div>
    )
}
