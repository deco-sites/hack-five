import Icon from "site/components/ui/Icon.tsx";

export interface Question {
  title: string;
  /** @format rich-text */
  answer: string;
}

export interface Props {
  title?: string;
  description?: string;
  questions?: Question[];
}

export default function BlogPosts({
  title = "FAQs",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  questions = [
    {
      title: "Question #1 text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut vestibulum ligula. Nam et tellus sit amet magna convallis interdum. Integer fermentum ligula nec velit hendrerit, quis feugiat odio feugiat. Ut vel nisi auctor, rhoncus felis vitae, tempor metus. Fusce ut lectus et ex consectetur ullamcorper. Nulla facilisi. Proin ullamcorper, odio a consectetur posuere, mauris felis rutrum lectus, et convallis est risus vitae nisi. Suspendisse potenti. Donec ultricies consectetur lorem, eget tempor nisi cursus in. Vivamus at nulla eros. Sed nec malesuada mauris. Curabitur id ex sed neque rutrum tincidunt. Sed sed lectus nec libero eleifend luctus. Aenean convallis feugiat elit, non tincidunt eros vehicula sed. Phasellus pretium urna sit amet risus interdum tempor.",
    },
    {
      title: "Question #2 text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut vestibulum ligula. Nam et tellus sit amet magna convallis interdum. Integer fermentum ligula nec velit hendrerit, quis feugiat odio feugiat. Ut vel nisi auctor, rhoncus felis vitae, tempor metus. Fusce ut lectus et ex consectetur ullamcorper. Nulla facilisi. Proin ullamcorper, odio a consectetur posuere, mauris felis rutrum lectus, et convallis est risus vitae nisi. Suspendisse potenti. Donec ultricies consectetur lorem, eget tempor nisi cursus in. Vivamus at nulla eros. Sed nec malesuada mauris. Curabitur id ex sed neque rutrum tincidunt. Sed sed lectus nec libero eleifend luctus. Aenean convallis feugiat elit, non tincidunt eros vehicula sed. Phasellus pretium urna sit amet risus interdum tempor.",
    },
    {
      title: "Question #3 text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut vestibulum ligula. Nam et tellus sit amet magna convallis interdum. Integer fermentum ligula nec velit hendrerit, quis feugiat odio feugiat. Ut vel nisi auctor, rhoncus felis vitae, tempor metus. Fusce ut lectus et ex consectetur ullamcorper. Nulla facilisi. Proin ullamcorper, odio a consectetur posuere, mauris felis rutrum lectus, et convallis est risus vitae nisi. Suspendisse potenti. Donec ultricies consectetur lorem, eget tempor nisi cursus in. Vivamus at nulla eros. Sed nec malesuada mauris. Curabitur id ex sed neque rutrum tincidunt. Sed sed lectus nec libero eleifend luctus. Aenean convallis feugiat elit, non tincidunt eros vehicula sed. Phasellus pretium urna sit amet risus interdum tempor.",
    },
    {
      title: "Question #4 text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut vestibulum ligula. Nam et tellus sit amet magna convallis interdum. Integer fermentum ligula nec velit hendrerit, quis feugiat odio feugiat. Ut vel nisi auctor, rhoncus felis vitae, tempor metus. Fusce ut lectus et ex consectetur ullamcorper. Nulla facilisi. Proin ullamcorper, odio a consectetur posuere, mauris felis rutrum lectus, et convallis est risus vitae nisi. Suspendisse potenti. Donec ultricies consectetur lorem, eget tempor nisi cursus in. Vivamus at nulla eros. Sed nec malesuada mauris. Curabitur id ex sed neque rutrum tincidunt. Sed sed lectus nec libero eleifend luctus. Aenean convallis feugiat elit, non tincidunt eros vehicula sed. Phasellus pretium urna sit amet risus interdum tempor.",
    },
    {
      title: "Question #5 text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut vestibulum ligula. Nam et tellus sit amet magna convallis interdum. Integer fermentum ligula nec velit hendrerit, quis feugiat odio feugiat. Ut vel nisi auctor, rhoncus felis vitae, tempor metus. Fusce ut lectus et ex consectetur ullamcorper. Nulla facilisi. Proin ullamcorper, odio a consectetur posuere, mauris felis rutrum lectus, et convallis est risus vitae nisi. Suspendisse potenti. Donec ultricies consectetur lorem, eget tempor nisi cursus in. Vivamus at nulla eros. Sed nec malesuada mauris. Curabitur id ex sed neque rutrum tincidunt. Sed sed lectus nec libero eleifend luctus. Aenean convallis feugiat elit, non tincidunt eros vehicula sed. Phasellus pretium urna sit amet risus interdum tempor.",
    },
  ],
}: Props) {
  return (
    <div class="relative group overflow-hidden flex flex-col items-center text-sm pt-8 pb-12 px-4">
      <div class="flex flex-col items-center w-full max-w-[1000px] gap-10 justify-between">
        <div class="flex flex-col items-center space-y-6">
          <p class="text-4xl leading-snug font-bold">{title}</p>
          <p class="text-lg">{description}</p>
        </div>
        <div class="flex flex-col gap-2 border-success w-full">
          {questions?.map((question) => (
            <details class="border-primary px-4 rounded-md border border-success group shadow-[-4px_4px_0px_rgba(0,0,0)]">
              <summary class="flex items-center justify-between text-lg cursor-pointer py-3 flex ">
                <span class="flex-auto">{question.title}</span>
                <span class="flex-none transition group-open:rotate-180">
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.17674 12.5577L8.17676 12.5577L8.5303 12.2041C8.53031 12.2041 8.53031 12.2041 8.53032 12.2041C8.62794 12.1065 8.78621 12.1065 8.88385 12.2041C8.88385 12.2041 8.88385 12.2041 8.88385 12.2041L15.6464 18.9667L16 19.3202L16.3535 18.9667L23.1161 12.2041C23.2138 12.1064 23.372 12.1064 23.4696 12.2041L23.8232 12.5577C23.9208 12.6553 23.9208 12.8135 23.8232 12.9112L16.1767 20.5577C16.0791 20.6553 15.9209 20.6553 15.8232 20.5577L8.17674 12.9112C8.17674 12.9112 8.17674 12.9112 8.17674 12.9112C8.07911 12.8135 8.07911 12.6553 8.17674 12.5577Z"
                      fill="#18181B"
                      stroke="#18181B"
                    />
                  </svg>
                </span>
              </summary>
              <p
                class="leading-relaxed mb-6 group-open:animate-fadeIn"
                dangerouslySetInnerHTML={{ __html: question.answer }}
              ></p>
            </details>
          ))}
        </div>
      </div>
      <Icon
        class="hidden md:block absolute rotate-180 translate-y-[16px] group-hover:translate-y-0 bottom-0 right-0 transition duration-300 ease-in-out"
        id="glasses-cat"
        height={40}
        width={116}
      />
    </div>
  );
}
