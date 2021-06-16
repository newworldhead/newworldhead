export default function CompanyColorLabel({ children }) {

    const colorKey = {
        syndicate: 'syndicate',
        mauraders: 'mauraders',
        covenant: 'covenant',
    }

    return (
        <div className={`text-sm text-${colorKey[children]}`}>
            {children}
        </div>
    )
}
