import { NgModule } from '@angular/core';
import { BoardComponent } from './board/board';
import { TextComponent } from './text/text';
@NgModule({
	declarations: [BoardComponent,
    TextComponent],
	imports: [],
	exports: [BoardComponent,
    TextComponent]
})
export class ComponentsModule {}
