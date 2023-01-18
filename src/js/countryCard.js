export function countryCard({ flags, name, capital, population, languages }) {
  return `
      <div class="country-card">
        <div class="country-info">
          <img class="country-info-flags" src="${flags.svg}" alt="${
    name.official
  }" width="60" />
          <h2 class="country-info-name">${name.official}</h2>
        </div>
        <p><span class="country-info-params">Capital:</span> ${capital}</p>
        <p><span class="country-info-params">Population:</span> ${population}</p>
        <p><span class="country-info-params">Languages:</span> ${Object.values(
          languages
        )}</p>
      </div>
    `;
}
