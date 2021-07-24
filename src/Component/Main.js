import KatalogAuthor from "./KatalogAuthor";
// import KatalogBooks from "./KatalogBooks";

export default function Main() {
    return(
        <div className="main-home">
            <h2>Asosiy kategoriyalar</h2>
            <ul>
              <li>Temuriylar davri </li>
              <li>Jadid adabiyoti </li>
              <li>Sovet davri </li>
              <li>Mustaqillik davri </li>
            </ul>
            <KatalogAuthor />
            {/* <KatalogBooks /> */}
        </div>
    )
}