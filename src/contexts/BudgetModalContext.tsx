import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import BudgetRequestModal from "@/components/BudgetRequestModal";

interface BudgetModalContextType {
  openBudgetModal: (defaultService?: string) => void;
}

const BudgetModalContext = createContext<BudgetModalContextType | null>(null);

export const useBudgetModal = () => {
  const ctx = useContext(BudgetModalContext);
  if (!ctx) throw new Error("useBudgetModal must be used within BudgetModalProvider");
  return ctx;
};

export const BudgetModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [defaultService, setDefaultService] = useState<string | undefined>();

  const openBudgetModal = useCallback((service?: string) => {
    setDefaultService(service);
    setOpen(true);
  }, []);

  return (
    <BudgetModalContext.Provider value={{ openBudgetModal }}>
      {children}
      <BudgetRequestModal open={open} onOpenChange={setOpen} defaultService={defaultService} />
    </BudgetModalContext.Provider>
  );
};
