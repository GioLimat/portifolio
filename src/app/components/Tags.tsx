function Tag({name}: {name: string}) {
    return (
        <div className="bg-primary rounded-2xl px-2 py-1 select-none">
            <span className="text-sm text-background">{name}</span>
        </div>
    );
}


function Tags({tags}: {tags: string[]}) {
    return <div className="flex flex-wrap gap-2 items-center justify-start">
        {tags.map((tag) => (
            <Tag key={tag} name={tag} />
        ))}
    </div>
}


export default Tags;