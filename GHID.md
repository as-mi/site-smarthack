# Smarthack 2025 - Ghid pentru Grupul Tehnic ASMI

## Articolul este împărțit în două părți:
- **[I. Instrucțiuni pentru Developeri](#i-instrucțiuni-pentru-developeri)**
- **[II. Instrucțiuni pentru Deployment](#ii-instrucțiuni-pentru-deployment)**


## I. Instrucțiuni pentru Developeri

### Cerințe:

- Node >= 10
- NPM
- Repository-ul folosește [Git Large File Storage (LFS)](https://git-lfs.github.com/)
  pentru a stoca imaginile și documentele binare.
  - Pe Windows, vine de obicei instalat cu Git.
  - Pe alte sisteme, poate fi instalat din package manager.
- De preferat, să fiți conectați la Git în editorul de text preferat (Recomandat: VS Code) și să folosiți GitHub Desktop sau alt asistent cu care sunteți familiari.

### Descărcare

Asigurați-vă că rulați această comandă la adresa pe care o doriți, de exemplu pentru `C:\Facultate\ASMI\Proiecte`, după rularea comenzii vom vedea folder-ul `C:\Facultate\ASMI\Proiecte\site-smarthack`.

```{bash}
git clone https://github.com/as-mi/site-smarthack.git
```

### Crearea unui branch nou

De obicei, lucrăm pe branch-uri identificate prin prenumele nostru, întrucât task-urile pe o anumită arie nu sunt preponderente.

```{bash}
cd site-smarthack
git checkout -b Prenume1N
git push -u origin Prenume1N
```

Exemplu de nume de branch: `VladM`

### Instalare dependințe

```{bash}
npm install
```

Asigurați-vă că în .gitignore există `node_modules/`. Acestea sunt necesare doar local.

### Încărcarea versiunii curente a site-ului
```{bash}
npm run build
```

### Pornire serviciului de dezvoltare

```{bash}
npm run dev
```

Site-ul local va fi disponibil la adresa `http://localhost:1234`. Actualizările se vor vedea în timp real, cu rare excepții, de exemplu când sunt modificate fișiere existente. În acest caz, va fi necesar să dați build din nou.

### Pentru a face controlul versiunilor mai ușor, folosiți GitHub Desktop.

<br>


####  Continuarea acestui articol este utilă doar voluntarilor cu acces la server prin SSH.

## II. Instrucțiuni pentru Deployment

### Cum facem modificările vizibile pe <i>[smarthack.asmi.ro](https://smarthack.asmi.ro)</i>?

1. Odată ce suntem conectați pe server, folosim comanda:
```
cd /var/www/site-smarthack
```

2. Pentru a prelua datele de pe main, folosim comanda:
```
git pull orginin main
git lfs pull
```

3. Ștergem conținutul fișierului `dist`.
```
rm -r dist
```

4. Builduim versiunea nouă a paginii:
```
npm run build
```

**Așteptăm până când e gata build-ul**. Acum ar trebui să apară modificările pe subdomeniu.

5. Pentru o sincronizare corectă a server-ului cu datele noi, trebuie să restartăm serviciul care menține pagina web.
```
systemctl restart nginx.service
```

6. (Opțional) Pentru mentenanță pe o perioadă îndelungată sau pentru ezitarea utilizării resurselor serverului în scop inutil, se poate opri temporar serviciul.
```
systemctl stop nginx.service

# Pentru a îl (re)porni
systemctl start nginx.service
```

7. Folosiți `exit` pentru a întrerupe corespunzător sesiunea de lucru.

8. Ne asigurăm că tot ce trebuia modificat apare pe site. <b>Utilizați CTRL+F5 (Force reload) înainte de această verificare</b>.

## Mult succes! 💙
