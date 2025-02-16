function Title({ text }) {
    return <h1 className="text-purple">{!text ? "Title" : text}</h1>
}

export default Title;