/* ref: https://www.tailwindtoolbox.com/components/accordion */

export function Accordion(props: {
  contentList: { id: string; title: string; content: string }[];
  allowMultipleOpen: boolean;
}) {

  return (
    <>
      {props.contentList.map(({ id, title, content }) => (
        <div class="tab w-full overflow-hidden border-b">
          <input
            class="absolute opacity-0"
            id={id}
            type={props.allowMultipleOpen ? "checkbox" : "radio"}
            name={props.allowMultipleOpen ? "acc-checkbox" : "acc-radio"}
          />
          <label
            class="flex justify-between items-center p-5 leading-normal cursor-pointer"
            for={id}
          >
            <p class="w-3/4">{title}</p>
          </label>
          <div class="tab-content overflow-hidden leading-normal bg-gray-400">
            <p class="p-5">
              {content}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
