import data from "./data";
import { isString } from "lodash";

const Menu = () => {
  return (
    <section
      style={{
        backgroundImage:
          "url('/images/blossoms-and-brews/menu-background.png')",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
      className="border-peach-400 relative mx-4 my-32 max-w-4xl overflow-hidden rounded-lg border-4 border-double px-4 pb-4 pt-8 text-center shadow-lg md:mx-auto"
    >
      <div className="text-center">
        <h2 className="mb-4 text-6xl font-bold">Le Menu</h2>
      </div>
      {data.map(({ title, items }) => (
        <div key={title} className="my-8">
          <h3 className="decoration-peach-400 mb-4 text-4xl font-bold underline decoration-wavy">
            {title}
          </h3>
          <ul className="">
            {items.map((item) => {
              if (isString(item))
                return (
                  <li key={item} className="font-libre text-lg font-bold">
                    {item}
                  </li>
                );

              const { course, courseItems } = item;

              return (
                <ul className="mb-4" key={course}>
                  <li className="font-nickainley mb-2 mt-6 text-2xl font-bold">
                    {course}
                  </li>
                  <ul>
                    {courseItems.map((courseItem) => (
                      <li
                        key={courseItem}
                        className="font-libre text-lg font-bold"
                      >
                        {courseItem}
                      </li>
                    ))}
                  </ul>
                </ul>
              );
            })}
          </ul>
        </div>
      ))}
    </section>
  );
};
export default Menu;
