
// import { Button } from "@/components/ui/button"
// import { ToastAction } from "@/components/ui/toast"
// import { useToast } from "@/components/ui/use-toast"
import React from "react"
 import { ToastAction } from "@/~/components/ui/toast"
 import { useToast } from "@/~/components/ui/use-toast"
 import { Button } from "@/~/components/ui/button"
export function ToastButton({children, description, header}) {
  const { toast } = useToast()
 
  return (
    <Button
      // variant="outline"
      className="bg-black"
      onClick={() => {
        toast({
          title: `${header}`,
          description: `${description}`,
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
        })
      }}
    >
      {children}
    </Button>
  )
}