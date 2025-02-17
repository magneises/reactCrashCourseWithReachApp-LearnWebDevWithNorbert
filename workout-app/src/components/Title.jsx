function Title({ text }) {
    // return <h1 className="text-purple">{!text ? "Title" : text}</h1> / Example video
    return <h1 className="text-purple">{text ? text : "Title"}</h1> // Reworking the above, this version makes more sense to me as it avoids the negation in the condition
}

export default Title;  