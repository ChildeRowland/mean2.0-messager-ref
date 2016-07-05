import { EventEmitter, OnInit, ElementRef, Renderer, DynamicComponentLoader, ViewContainerRef } from '@angular/core';
import { NgModel } from '@angular/common';
import { TypeaheadContainerComponent } from './typeahead-container.component';
export declare class TypeaheadDirective implements OnInit {
    typeaheadLoading: EventEmitter<boolean>;
    typeaheadNoResults: EventEmitter<boolean>;
    typeaheadOnSelect: EventEmitter<{
        item: any;
    }>;
    typeahead: any;
    typeaheadMinLength: number;
    typeaheadWaitMs: number;
    typeaheadOptionsLimit: number;
    typeaheadOptionField: string;
    typeaheadAsync: boolean;
    typeaheadLatinize: boolean;
    typeaheadSingleWords: boolean;
    typeaheadWordDelimiters: string;
    typeaheadPhraseDelimiters: string;
    container: TypeaheadContainerComponent;
    isTypeaheadOptionsListActive: boolean;
    private debouncer;
    private _matches;
    private placement;
    private popup;
    private cd;
    private viewContainerRef;
    private element;
    private renderer;
    private loader;
    protected onChange(e: KeyboardEvent): void;
    protected onFocus(): void;
    protected onBlur(): void;
    protected onKeydown(e: KeyboardEvent): void;
    constructor(cd: NgModel, viewContainerRef: ViewContainerRef, element: ElementRef, renderer: Renderer, loader: DynamicComponentLoader);
    ngOnInit(): void;
    show(matches: Array<any>): void;
    hide(): void;
    changeModel(value: any): void;
    matches: Array<any>;
    private debounce(func, wait);
    private processMatches();
    private testMatch(match, test);
    private finalizeAsyncCall();
}
