import { menuData } from "@/components/menu/Menu";
import { atom } from "jotai";

const menuAtom = atom<(typeof menuData)[number]>();
export { menuAtom };
