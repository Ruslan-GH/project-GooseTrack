const GENRES = [
  {
    identifier: 'fiction',
    name: 'Fiction',
  },
  {
    identifier: 'classics',
    name: 'Classics',
  },
  {
    identifier: 'fantasy',
    name: 'Fantasy',
  },
  {
    identifier: 'romance',
    name: 'Romance',
  },
];

export function Filters({ onFilterClick }) {
  return (
    <>
      <p>Book Genres</p>
      <ul>
        {GENRES.map(genre => (
          <li>
            <div onClick={() => onFilterClick(genre.identifier)}>
              {genre.name}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Filters;
