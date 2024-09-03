import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1>Color Test</h1>
      <Button>botón</Button>
      <Button variant={"secondary"}>botón</Button>
      <Button variant={"default"}>botón</Button>
      <Button variant={"ghost"}>botón</Button>
      <Button variant={"link"}>botón</Button>
      <Button variant={"outline"}>botón</Button>
      <Button variant={"destructive"}>botón</Button>
      <div className="grid grid-cols-4 gap-4">
        <div className=" w-40 h-40" style={{ backgroundColor: "#00264D" }} />
        <div className=" w-40 h-40" style={{ backgroundColor: "#FFFFFF" }} />
        <div className=" w-40 h-40" style={{ backgroundColor: "#F0F0F0" }} />
        <div className=" w-40 h-40" style={{ backgroundColor: "#D4AF37" }} />

        <div className=" w-40 h-40" style={{ backgroundColor: "#50C878" }} />
        <div className=" w-40 h-40" style={{ backgroundColor: "#FFFFFF" }} />
        <div className=" w-40 h-40" style={{ backgroundColor: "#2F2F2F" }} />
        <div className=" w-40 h-40" style={{ backgroundColor: "#F5F5DC" }} />

        <div className=" w-40 h-40" style={{ backgroundColor: "#E2725B" }} />
        <div className=" w-40 h-40" style={{ backgroundColor: "#FFF5E1" }} />
        <div className=" w-40 h-40" style={{ backgroundColor: "#333333" }} />
        <div className=" w-40 h-40" style={{ backgroundColor: "#F9F9F9" }} />

        <div className=" w-40 h-40" style={{ backgroundColor: "#000000" }} />
        <div className=" w-40 h-40" style={{ backgroundColor: "#FFD700" }} />
        <div className=" w-40 h-40" style={{ backgroundColor: "#FFFFFF" }} />
        <div className=" w-40 h-40" style={{ backgroundColor: "#BFBFBF" }} />
      </div>
    </div>
  );
}
