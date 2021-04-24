/**
Function which is called for every item in `input`. Expected to return a `Promise` or value.
@param element - Iterated element.
@param index - Index of the element in the source array.
*/
export type Mapper<Element = any, NewElement = unknown> = (
	element: Element,
	index: number
) => NewElement | Promise<NewElement>;

/**
@param input - Iterable to be iterated over in the `mapper` function.
@param mapper - Function which is called for every item in `input`. Expected to return a `Promise` or value.
@returns A `Promise` that is fulfilled when all of the input's promises have resolved, or if the input iterable contains no promises.
**/
export default function pMap<Element, NewElement>(
	input: Iterable<Element>,
	mapper: Mapper<Element, NewElement>
): Promise<NewElement[]>;