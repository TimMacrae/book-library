import type { Book } from "../types/Book";

const defaultCover = "https://img.freepik.com/fotos-kostenlos/altes-buch-offen-auf-dunklem-holz-hintergrund_1373-581.jpg";

export const exampleBooks: Book[] = [
    {
        id: "1",
        title: "Peter Pan",
        description: "Die Geschichte von Peter Pan, dem Jungen, der nie erwachsen wird.",
        authors: ["J.M. Barrie"],
        firstPublishDate: "1911-10-01",
        cover: defaultCover,
        language: "Deutsch",
        isbn: "978-3-12345-678-9"
    },
    {
        id: "2",
        title: "Les Misérables",
        description: "Ein epischer Roman über das Leben im Frankreich des 19. Jahrhunderts.",
        authors: ["Victor Hugo"],
        firstPublishDate: "1862-01-01",
        cover: defaultCover,
        language: "Deutsch",
        isbn: "978-3-98765-432-1"
    },
    {
        id: "3",
        title: "Der kleine Prinz",
        description: "Ein Klassiker der Kinderliteratur über einen kleinen Prinzen und seine Abenteuer.",
        authors: ["Antoine de Saint-Exupéry"],
        firstPublishDate: "1943-04-06",
        cover: defaultCover,
        language: "Deutsch",
        isbn: "978-3-55123-456-7"
    },
    {
        id: "4",
        title: "1984",
        description: "Eine dystopische Zukunftsvision von George Orwell.",
        authors: ["George Orwell"],
        firstPublishDate: "1949-06-08",
        cover: defaultCover,
        language: "Deutsch",
        isbn: "978-3-40567-890-1"
    },
    {
        id: "5",
        title: "Der Hobbit",
        description: "Bilbo Beutlins Abenteuer in Mittelerde.",
        authors: ["J.R.R. Tolkien"],
        firstPublishDate: "1937-09-21",
        cover: defaultCover,
        language: "Deutsch",
        isbn: "978-3-45123-789-0"
    },
    {
        id: "6",
        title: "Stolz und Vorurteil",
        description: "Eine Liebesgeschichte im England des 19. Jahrhunderts.",
        authors: ["Jane Austen"],
        firstPublishDate: "1813-01-28",
        cover: defaultCover,
        language: "Deutsch",
        isbn: "978-3-32123-654-8"
    },
    {
        id: "7",
        title: "Moby-Dick",
        description: "Die Geschichte von Kapitän Ahabs Jagd nach dem weißen Wal.",
        authors: ["Herman Melville"],
        firstPublishDate: "1851-10-18",
        cover: defaultCover,
        language: "Deutsch",
        isbn: "978-3-11111-111-1"
    },
    {
        id: "8",
        title: "Frankenstein",
        description: "Ein Wissenschaftler erschafft ein künstliches Leben.",
        authors: ["Mary Shelley"],
        firstPublishDate: "1818-01-01",
        cover: defaultCover,
        language: "Deutsch",
        isbn: "978-3-22222-222-2"
    },
    {
        id: "9",
        title: "Alice im Wunderland",
        description: "Die Abenteuer von Alice in einer fantastischen Welt.",
        authors: ["Lewis Carroll"],
        firstPublishDate: "1865-11-26",
        cover: defaultCover,
        language: "Deutsch",
        isbn: "978-3-33333-333-3"
    },
    {
        id: "10",
        title: "Dracula",
        description: "Die klassische Vampirgeschichte von Bram Stoker.",
        authors: ["Bram Stoker"],
        firstPublishDate: "1897-05-26",
        cover: defaultCover,
        language: "Deutsch",
        isbn: "978-3-44444-444-4"
    },
    {
        id: "11",
        title: "Die Verwandlung",
        description: "Die surrealistische Geschichte von Gregor Samsa.",
        authors: ["Franz Kafka"],
        firstPublishDate: "1915-10-01",
        cover: defaultCover,
        language: "Deutsch",
        isbn: "978-3-55555-555-5"
    },
    {
        id: "12",
        title: "Der Graf von Monte Christo",
        description: "Rache- und Abenteuerroman von Alexandre Dumas.",
        authors: ["Alexandre Dumas"],
        firstPublishDate: "1844-08-28",
        cover: defaultCover,
        language: "Deutsch",
        isbn: "978-3-66666-666-6"
    }
];
