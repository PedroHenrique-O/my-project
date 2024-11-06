import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface IMyDialogProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  content?: React.ReactNode;
  asChild?: boolean;
}

export const DialogComponent = ({
  children,
  title,
  description,
  content,
  asChild = true,
}: IMyDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {content}
      </DialogContent>
    </Dialog>
  );
};
