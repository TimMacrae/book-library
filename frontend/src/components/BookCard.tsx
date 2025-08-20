import type { Book } from "../types/Book";
import { useNavigate } from "react-router-dom";

type BookCardProps = {
    book: Book;
};

export default function BookCard({ book }: Readonly<BookCardProps>) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/books/${book.id}`);
    };

    return (
        <button
            type="button"
            className="book-card"
            onClick={handleClick}
            style={{
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                borderRadius: "12px",
                overflow: "hidden",
                backgroundColor: "#fff",
                boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
                border: "none",
                padding: 0,
            }}
            onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.transform = "translateY(-3px)";
                el.style.boxShadow = "0 6px 15px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 3px 10px rgba(0,0,0,0.08)";
            }}
        >
            {book.cover && (
                <img
                    src={book.cover}
                    alt={book.title}
                    style={{ width: "100%", height: "220px", objectFit: "cover" }}
                />
            )}
            <div style={{ padding: "12px", display: "flex", flexDirection: "column", gap: "4px" }}>
                <h3 style={{ margin: 0, fontSize: "1rem", fontWeight: 600, textAlign: "center" }}>
                    {book.title}
                </h3>
                <p style={{ margin: 0, fontSize: "0.85rem", color: "#666", textAlign: "center" }}>
                    {book.authors.join(", ")}
                </p>
                <p style={{ margin: 0, fontSize: "0.75rem", color: "#999", textAlign: "center" }}>
                    Erstveröffentlicht: {book.firstPublishDate}
                </p>
            </div>
        </button>
    );
}
