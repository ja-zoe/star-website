import StarStat from "./StarStat";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import type { StarStatProps } from "./StarStat";
import React from "react";
export interface SubteamModalProps {
  starStatProps: StarStatProps;
  children: React.ReactNode;
}

const SubteamModal = ({ starStatProps, children }: SubteamModalProps) => {
  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer">
        <StarStat {...starStatProps} />
      </DialogTrigger>
      <DialogContent className="bg-black text-white overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-start">
            About the {starStatProps.stat} subteam
          </DialogTitle>
        </DialogHeader>
        <div className="text-start">{children}</div>
      </DialogContent>
    </Dialog>
  );
};
export default SubteamModal;
