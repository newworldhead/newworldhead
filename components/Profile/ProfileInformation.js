export default function ProfileInformation({ user }) {
    return (
        <div className="my-4 flex flex-col gap-1 tracking-wide capitalize">
            <p className="capitalize">Name: {user && user.username}</p>
            <p>Email: {user && user.email}</p>
        </div>
    )
}
