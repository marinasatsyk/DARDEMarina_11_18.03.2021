function Tag({ tags, classTag }) {
    return (
        <div className="tags">
            <ul>
                {tags.map((tag) => (
                    <li className={`tag ${classTag}`} key={tag}>
                        <p>{tag}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Tag;
