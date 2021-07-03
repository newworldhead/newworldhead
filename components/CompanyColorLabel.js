export default function CompanyColorLabel({ children }) {

    const colorKey = {
        undecided: 'undecided',
        syndicate: 'syndicate',
        marauders: 'marauders',
        covenant: 'covenant',
    }

    return (
        <div className={`text-sm text-${colorKey[children]}`}>
            {children}
        </div>
    )
}
