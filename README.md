# Site-ul Smarthack

Acest repo conține codul din spatele site-ului de prezentare al hackathon-ului
Smarthack, organizat de Asociația Studenților la Matematică și Informatică.

Pentru a vedea site-ul live intrați pe [smarthack.asmi.ro](https://smarthack.asmi.ro/)

# Instrucțiuni pentru developeri

Cerințe:

- Node >= 10
- NPM
- Repository-ul folosește [Git Large File Storage (LFS)](https://git-lfs.github.com/)
  pentru a stoca imaginile și documentele binare.
  - Pe Windows, vine de obicei instalat cu Git.
  - Pe alte sisteme, poate fi instalat din package manager.

### Instalare dependințe

```{bash}
npm install
```

### Pornire server de dezvoltare

```{bash}
npm run dev
```

Site-ul local va fi disponibil la adresa `http://localhost:1234`.

### Build

```{bash}
npm run build
```
