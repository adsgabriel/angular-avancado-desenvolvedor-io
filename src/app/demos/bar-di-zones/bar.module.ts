import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { BarComponent } from "./bar.component";
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from "./bar.config";


@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[
        BarComponent
    ],
    providers:[

    ],
    exports:[
        BarComponent
    ]
})
export class BarModule{
    static forRoot(config: BarUnidadeConfig) : ModuleWithProviders<BarModule> {
        return {
            ngModule: BarModule,
            providers: [
                { provide: 'ConfigManualUnidade', useValue: config },
                { provide: BAR_UNIDADE_CONFIG, useValue: config }


            ]
        }
    }

    static forChild() {

    }
}