export const GifGridItem = ({ title, url, id}) => (
    <div className="card">
        <img src={url} alt={title}/>
        <p>{title}</p>
    </div>
);

