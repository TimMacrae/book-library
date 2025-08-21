import type { Book } from "../types/Book";

const defaultCover = "https://img.freepik.com/fotos-kostenlos/altes-buch-offen-auf-dunklem-holz-hintergrund_1373-581.jpg";
export const exampleBooks: Book[] = [
    {
        id: "1",
        title: "Peter Pan",
        description: "Die Geschichte von Peter Pan, dem Jungen, der nie erwachsen wird.",
        authors: ["J.M. Barrie"],
        firstPublishDate: "01.10.1911",
        cover: defaultCover,
        language: "DE",
        isbn: "978-3-12345-678-9"
    },
    {
        id: "2",
        title: "Les Misérables",
        description: "Ein epischer Roman über das Leben im Frankreich des 19. Jahrhunderts.",
        authors: ["Victor Hugo"],
        firstPublishDate: "01.01.1862",
        cover: defaultCover,
        language: "DE",
        isbn: "978-3-98765-432-1"
    },
    {
        id: "3",
        title: "Der kleine Prinz",
        description: "Ein Klassiker der Kinderliteratur über einen kleinen Prinzen und seine Abenteuer.",
        authors: ["Antoine de Saint-Exupéry"],
        firstPublishDate: "06.04.1943",
        cover: defaultCover,
        language: "DE",
        isbn: "978-3-55123-456-7"
    },
    {
        id: "4",
        title: "1984",
        description: "Eine dystopische Zukunftsvision von George Orwell.",
        authors: ["George Orwell"],
        firstPublishDate: "08.06.1949",
        cover: defaultCover,
        language: "EN",
        isbn: "978-3-40567-890-1"
    },
    {
        id: "5",
        title: "Der Hobbit",
        description: "Bilbo Beutlins Abenteuer in Mittelerde.",
        authors: ["J.R.R. Tolkien"],
        firstPublishDate: "21.09.1937",
        cover: defaultCover,
        language: "DE",
        isbn: "978-3-45123-789-0"
    },
    {
        id: "6",
        title: "Stolz und Vorurteil",
        description: "Eine Liebesgeschichte im England des 19. Jahrhunderts.",
        authors: ["Jane Austen"],
        firstPublishDate: "28.01.1813",
        cover: defaultCover,
        language: "EN",
        isbn: "978-3-32123-654-8"
    },
    {
        id: "7",
        title: "Moby-Dick",
        description: "Die Geschichte von Kapitän Ahabs Jagd nach dem weißen Wal.",
        authors: ["Herman Melville"],
        firstPublishDate: "18.10.1851",
        cover: defaultCover,
        language: "EN",
        isbn: "978-3-11111-111-1"
    },
    {
        id: "8",
        title: "Frankenstein",
        description: "Ein Wissenschaftler erschafft ein künstliches Leben.",
        authors: ["Mary Shelley"],
        firstPublishDate: "01.01.1818",
        cover: defaultCover,
        language: "EN",
        isbn: "978-3-22222-222-2"
    },
    {
        id: "9",
        title: "Alice im Wunderland",
        description: "Die Abenteuer von Alice in einer fantastischen Welt.",
        authors: ["Lewis Carroll"],
        firstPublishDate: "26.11.1865",
        cover: defaultCover,
        language: "EN",
        isbn: "978-3-33333-333-3"
    },
    {
        id: "10",
        title: "Dracula",
        description: "Die klassische Vampirgeschichte von Bram Stoker.",
        authors: ["Bram Stoker"],
        firstPublishDate: "26.05.1897",
        cover: defaultCover,
        language: "EN",
        isbn: "978-3-44444-444-4"
    },
    {
        id: "11",
        title: "Die Verwandlung",
        description: "Die surrealistische Geschichte von Gregor Samsa.",
        authors: ["Franz Kafka"],
        firstPublishDate: "01.10.1915",
        cover: defaultCover,
        language: "DE",
        isbn: "978-3-55555-555-5"
    },
    {
        id: "12",
        title: "Der Graf von Monte Christo",
        description: "Rache- und Abenteuerroman von Alexandre Dumas.",
        authors: ["Alexandre Dumas"],
        firstPublishDate: "28.08.1844",
        cover: defaultCover,
        language: "DE",
        isbn: "978-3-66666-666-6"
    },
    {
        id: "13",
        title: "Hamlet",
        description: "Tragödie von William Shakespeare über Rache, Macht und Verrat.",
        authors: ["William Shakespeare"],
        firstPublishDate: "01.01.1603",
        cover: defaultCover,
        language: "EN",
        isbn: "978-3-77777-777-7"
    },
    {
        id: "14",
        title: "Faust",
        description: "Ein Klassiker der deutschen Literatur von Goethe.",
        authors: ["Johann Wolfgang von Goethe"],
        firstPublishDate: "01.01.1808",
        cover: defaultCover,
        language: "DE",
        isbn: "978-3-88888-888-8"
    },
    {
        id: "15",
        title: "Anna Karenina",
        description: "Eine russische Liebesgeschichte von Leo Tolstoi.",
        authors: ["Leo Tolstoi"],
        firstPublishDate: "01.01.1878",
        cover: defaultCover,
        language: "EN",
        isbn: "978-3-99999-999-9"
    }
];
