"use client"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { useMobileSidebar } from "@/hooks/use-mobile-sidebar"
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet,SheetContent } from "@/components/ui/sheet";
import { Sidebar } from "./sidebar";


export const MobileSidebar=()=>{

    const  pathname = usePathname();

    const [isMounted,setIsMounted] = useState(false);

    const onOpen = useMobileSidebar((state)=>state.onOpen);
    const onClose = useMobileSidebar((state)=>state.onClose);
    const isOpen = useMobileSidebar((state)=>state.isOpen);

    //This useEffect below is used to guerantee to render this component only on client.
    //and prevent hydration errors.
    useEffect(()=>{
        setIsMounted(true);
    },[])

    //this useEffect below toggles the onClose state,whenever url path changes or is toggled manually.
    useEffect(()=>{
        onClose();
    },[pathname,onClose]);
    
    if(!isMounted) {
        return null;
    }

    return(
        <>
            <Button 
            onClick={onOpen} 
            className=" block md:hidden"
            variant="ghost"
            size="sm"
            >
                <Menu className="h-4 w-4"/>
            </Button>
            <Sheet open={isOpen} onOpenChange={onClose}>
                <SheetContent
                side="left"
                className="w-[190px]">
                    <Sidebar
                    storageKey="t-sidebar-mobile-state"
                    />
                </SheetContent>
            </Sheet>
        </>
    )
}