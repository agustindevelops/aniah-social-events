import clsx from "clsx";
import { AiFillHeart } from "react-icons/ai";

export interface ListItem {
  primary: string;
  secondary?: string;
}

export interface ListWrapperProps {
  heading?: string;
  items: string[] | ListItem[];
  headingColor?: string;
  textColor?: string | null;
  iconColor?: string;
  textSize?: string;
  headingSize?: string;
  headingFont?: string;
  primaryTextFont?: string;
  secondaryTextFont?: string;
  className?: string;
  listClassName?: string;
  ulClassName?: string;
  showHeading?: boolean;
}

// Extract the repeated list rendering as a component
const ListItems = ({
  items,
  primaryTextFont,
  secondaryTextFont,
  textColor,
}: {
  items: string[] | ListItem[];
  primaryTextFont: string;
  secondaryTextFont: string;
  textColor?: string | null;
}) => (
  <>
    {items.map((item, index) => {
      const primaryText = typeof item === "string" ? item : item.primary;
      const secondaryText =
        typeof item === "string" ? undefined : item.secondary;
      const key = typeof item === "string" ? item : `${item.primary}-${index}`;
      const colorGroup = Math.floor(index / 3) % 2;
      // Use textColor if provided, otherwise alternate between default colors
      const itemTextColor =
        textColor || (colorGroup === 0 ? "text-pink-600" : "text-pink-500");
      return (
        <li key={key} className="my-4 flex items-start gap-4 text-left">
          <div className={`py-2 ${itemTextColor}`}>
            <AiFillHeart />
          </div>
          <div className="flex flex-col self-center text-lg">
            <span className={`${primaryTextFont} ${itemTextColor}`}>
              {primaryText}
            </span>
            {secondaryText && (
              <span
                className={`${secondaryTextFont} ${itemTextColor} text-xs lg:text-sm mt-1`}
              >
                {secondaryText}
              </span>
            )}
          </div>
        </li>
      );
    })}
  </>
);

const ListWrapper = ({
  heading,
  items,
  headingColor = "text-pink-600",
  textColor,
  iconColor = "text-pink-600",
  textSize = "text-sm lg:text-xl",
  headingSize = "text-2xl lg:text-3xl",
  headingFont = "font-pacifico",
  primaryTextFont = "font-pacifico",
  secondaryTextFont = "font-libre",
  className = "",
  listClassName = "",
  ulClassName = "px-2 xl:px-12",
  showHeading = true,
}: ListWrapperProps) => {
  const list = (
    <ul
      className={clsx(
        ulClassName,
        textSize,
        listClassName,
        "leading-relaxed",
        "mb-16"
      )}
    >
      <ListItems
        items={items}
        primaryTextFont={primaryTextFont}
        secondaryTextFont={secondaryTextFont}
        textColor={textColor}
      />
    </ul>
  );

  if (!showHeading || !heading) {
    return list;
  }

  return (
    <div className={clsx(className, "mb-16")}>
      <h3 className={`${headingFont} ${headingSize} ${headingColor} mb-4`}>
        {heading}
      </h3>
      {list}
    </div>
  );
};

export default ListWrapper;
