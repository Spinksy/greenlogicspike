import { humanize } from "@/lib/utils/textConverter";
import * as Icon from "react-feather";

const HomePageFeatures = ({ feature_list }) => {
  return (
    <div className="key-feature-grid mt-10 grid grid-cols-2 gap-7 md:grid-cols-3 xl:grid-cols-4">
      {feature_list.map((item, i) => {
        const FeatherIcon = Icon[humanize(item.icon)];
        return (
          <div
            key={i}
            className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg"
          >
            <div>
              <div className="flex space-between">
                <h3 className="h4 text-xl lg:text-2xl flex-1">{item.title}</h3>
                <span className="icon">
                  <FeatherIcon />
                </span>
              </div>
              <div className="h-6">

              </div>
              <p>{item.content}</p>
              <div className="image-placeholder mt-4 h-32 bg-gray-200"></div>
            </div>

          </div>
        );
      })}
    </div>
  );
};

export default HomePageFeatures;
