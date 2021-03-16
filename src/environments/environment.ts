// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  social: [
    {
      tipo: 'email',
      icone: 'fas fa-envelope',
      label: 'e-mail',
      conteudo: 'eu@kaike.dev',
      ativo: true,
      ativohome: false,
    },
    {
      tipo: 'whatsapp',
      icone: 'fab fa-whatsapp',
      label: 'whatsapp',
      conteudo: '+55 11 98300 8156',
      ativo: true,
      ativohome: false,
    },
    {
      tipo: 'github',
      icone: 'fab fa-github',
      label: 'github',
      conteudo: 'https://github.com/caiquesoares',
      ativo: true,
      ativohome: true,
    },
    {
      tipo: 'instagram',
      icone: 'fab fa-instagram',
      label: 'instagram',
      conteudo: 'https:instagram.com/kaikelf',
      ativo: true,
      ativohome: true,
    },
    {
      tipo: 'linkedin',
      icone: 'fab fa-linkedin',
      label: 'linkedin',
      conteudo: 'https://www.linkedin.com/in/caique-fagundes-6237a9103/',
      ativo: true,
      ativohome: true,
    }
    ]
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
