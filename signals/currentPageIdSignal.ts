import { signal } from "@preact/signals";

export type PageID = 'inicio' | 'servicios' | 'instalaciones' | 'contacto'

export const currentPageIdSignal = signal<PageID>('inicio');

export const setCurrentPageId = (pageId: PageID) => {
    currentPageIdSignal.value = pageId;
}
