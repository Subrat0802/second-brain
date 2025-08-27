import { useSelector } from "react-redux";
import type { RootState } from "../../../main";
import GridContent from "../../ui/GridContent";
import EmabadedContent from "../../ui/EmabadedContent";

export const ContentCard = () => {
  const userContent =
    useSelector((state: RootState) => state.commonState.userContent?.content) ??
    [];

  const searchAndFilterText =
    useSelector((state: RootState) => state.commonState.filterAndSearchText) ??
    "";

  const contentShowType = useSelector(
    (state: RootState) => state.commonState.showContent
  );

  return (
    <div
      className={`${
        contentShowType === "grid" && "grid grid-cols-3 gap-4 mt-5"
      } 
                    ${contentShowType === "rows" && "flex flex-col gap-3 mt-5"}
                    ${contentShowType === "eye" && "grid md:grid-cols-2 gap-20 w-fit mx-auto mt-5 "}
                    `}
    >
      {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        userContent.length === 0 ? (
          <p>Loading..</p>
        ) : (
          
          userContent
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
            .filter(
              (el: { type?: string; title?: string; description?: string }) => {
                if (!searchAndFilterText) return true;
                const type = el.type?.toLowerCase() ?? "";
                const title = el.title?.toLowerCase() ?? "";
                const desc = el.description?.toLowerCase() ?? "";

                return (
                  type.includes(searchAndFilterText.toLowerCase()) ||
                  title.includes(searchAndFilterText.toLowerCase()) ||
                  desc.includes(searchAndFilterText.toLowerCase())
                );
              }
            )
            .map(
              (el: {
                _id: string;
                contentType: string;
                title: string;
                description: string;
                type: string;
                link: string;
                createdAt: string;
                image: string;
              }) => (
                <div key={el._id} className="rounded-xl w-[100%] ">
                  {contentShowType === "grid" && (
                    <GridContent
                      contentType={el.contentType}
                      title={el.title}
                      description={el.description}
                      type={el.type}
                      link={el.link}
                      createdAt={el.createdAt}
                      image={el.image}
                      contentShowType={contentShowType}
                      id={el._id}
                    />
                  )}
                  {contentShowType === "rows" && (
                    <GridContent
                      contentType={el.contentType}
                      title={el.title}
                      description={el.description}
                      type={el.type}
                      link={el.link}
                      createdAt={el.createdAt}
                      image={el.image}
                      contentShowType={contentShowType}
                      id={el._id}
                    />
                  )}
                
                    {contentShowType === "eye" && (
                      <EmabadedContent
                        contentType={el.contentType}
                        title={el.title}
                        description={el.description}
                        type={el.type}
                        link={el.link}
                        createdAt={el.createdAt}
                        image={el.image}
                        id={el._id}
                      />
                    )}
       
                </div>
              )
            )
        )
      }
    </div>
  );
};
