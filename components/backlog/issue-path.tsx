import { Button } from "../ui/button";
import { IssueSelectType } from "../issue-select-type";
import { type IssueType } from "./issue";
import { IssueSelectEpic } from "../issue-select-epic";

const IssuePath: React.FC<{
  issue: IssueType;
  setIssue: React.Dispatch<React.SetStateAction<string | null>>;
}> = ({ issue, setIssue }) => {
  return (
    <div className="flex gap-x-3">
      <div
        data-state={issue.epic ? "epic" : "not-epic"}
        className="flex items-center [&[data-state=not-epic]]:hidden"
      >
        <IssueSelectEpic
          currentEpic={{ key: "P-SEBB-1", title: "Epic title 1" }}
        />
        <Button
          onClick={() => setIssue(issue.epic)}
          customColors
          className=" bg-transparent text-xs text-zinc-500 underline-offset-2 hover:underline"
        >
          <span className="whitespace-nowrap">{issue.epic}</span>
        </Button>
      </div>
      <span className="py-1.5 text-zinc-500">/</span>
      <div className="relative flex items-center">
        <IssueSelectType currentType="TASK" />
        <Button
          customColors
          className="bg-transparent text-xs text-zinc-500 underline-offset-2 hover:underline"
        >
          <span className="whitespace-nowrap">{issue.id.toUpperCase()}</span>
        </Button>
      </div>
    </div>
  );
};

export { IssuePath };
