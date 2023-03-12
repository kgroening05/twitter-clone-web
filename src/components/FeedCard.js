
export default function FeedCard({ body, author, id }) {
    console.log(author)
    return(
        <div className="tweet-card" key={id}>
          <p>{body}</p>
          <p>{author}</p>
        </div>
    )
}