import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DataBindingComponent } from "./demos/data-binding/data-binding.component";
import { FilmesComponent } from "./demos/pipes/filmes/filmes.component";
import { CadastroComponent } from "./demos/reactiveForms/cadastro/cadastro.component";
import { ContatoComponent } from "./institucional/contato/contato.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { HomeComponent } from "./navegacao/home/home.component";
import { NotFoundComponent } from "./navegacao/not-found/not-found.component";
import { ListaProdutoComponent } from "./produtos/lista-produto/lista-produto.component";
import { AuthGuard } from "./services/app.guard";
import { CadastroGuard } from "./services/cadastro.guard";


const rootRouterConfig: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'demos', component: DataBindingComponent},
    { path: 'produto-detalhe/:id', component: ListaProdutoComponent},
    { path: 'filmes', component: FilmesComponent},
    { path: 'cadastro', component: CadastroComponent, canDeactivate: [CadastroGuard]},
    {path: 'produtos', 
        loadChildren: () => import('./demos/arquitetura-componentes/produto.module')
        .then(m => m.ProdutoModule)},
    {path: 'admin',
            loadChildren: () => import('./demos/admin/admin.module')
            .then(m => m.AdminModule),
            canLoad: [AuthGuard], canActivate: [AuthGuard]},

    {path: '**', component: NotFoundComponent}, //sempre deixar por ultimo
];

@NgModule({
    imports:[
        RouterModule.forRoot(rootRouterConfig, { enableTracing: false })
    ],
    exports:[
        RouterModule,
    ]
})
export class AppRoutingModule{}