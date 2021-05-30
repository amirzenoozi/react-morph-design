// ***************** READ ME **********************
/*
first you have to import all the functions in your styled file:
import {rem,margins,paddings,heightOneLine,square,bgGradient,centered,overlay,placeholder,} from "./functions";
then you can start using it !
*/

/*
================= Description ====================
change the given size in px into rem

================= Code Example ====================
EXAMPLE: font-size: ${rem(40)};
*/
export const rem = (pxSize: number): string => {
  const remNumber = pxSize / 16;
  return remNumber + "rem";
};


/*
================= Description ====================
make element center in parent

================= Code Example ====================
EXAMPLE: ${ centered(true, true) };
*/
export const centered = (vertical: boolean, horizontal: boolean): string => {
  const position = `position: absolute;`;
  if (vertical && horizontal) {
    return `${position}
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%)`;
  } else if (vertical) {
    return `${position}
    left:50%;
    transform: translateX(-50%)`;
  } else if (horizontal) {
    return `${position}
    top:50%;
    transform: translateY(-50%)`;
  }
};

/*
================= Description ====================
colored overlay on top of elements

 ================= Params ====================
 @param  {string} $color    hex OR rgb(a)

================= Code Example ====================
 EXAMPLE : ${overlay("after", "rgba(0,0,0,0.3)", 3)}
*/
export const overlay = (
  pos: "before" | "after",
  color: string,
  z_index?: number
): string => {
  return `&::${pos} {
		display: block;
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: ${color};
		z-index: ${z_index || 0};
	}`;
};
