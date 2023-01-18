export function countriesList({ flags, name }) {
  return `
    <li class="country-list-item">
      <img class="country-list-flags" src="${flags.svg}" alt="${name.official}" width="40" />
      <h2 class="country-list-name">${name.official}</h2>
    </li>
    `;
}
