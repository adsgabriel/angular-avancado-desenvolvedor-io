import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DataBindingComponent } from "./demos/data-binding/data-binding.component";
import { CadastroComponent } from "./demos/reactiveForms/cadastro/cadastro.component";
import { ContatoComponent } from "./institucional/contato/contato.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { HomeComponent } from "./navegacao/home/home.component";
import { NotFoundComponent } from "./navegacao/not-found/not-found.component";
import { ListaProdutoComponent } from "./produtos/lista-produto/lista-produto.component";


const rootRouterConfig: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'demos', component: DataBindingComponent},
    { path: 'produto-detalhe/:id', component: ListaProdutoComponent},
    { path: 'cadastro', component: CadastroComponent},
    {path: 'produtos', 
        loadChildren: () => import('./demos/arquitetura-componentes/produto.module')
        .then(m => m.ProdutoModule)},

    {path: '**', component: NotFoundComponent}, //sempre deixar por ultimo
];

@NgModule({
    imports:[
        RouterModule.forRoot(rootRouterConfig)
    ],
    exports:[
        RouterModule,
    ]
})
export class AppRoutingModule{}