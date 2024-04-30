"use client"

import Link from "next/link";
import { Plus } from "lucide-react";
import { useLocalStorage } from "usehooks-ts";
import { useOrganization, useOrganizationList} from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Skeleton } from "@/components/ui/skeleton";
import { Accordion } from "@/components/ui/accordion";

//define SidebarProps
interface SidebarProps {
    storageKey?:string;
};

export const Sidebar = ({storageKey='t-sidebar-state',}:SidebarProps) =>{//give storageKey default value of 't-sidebar-state'

    const [expanded,setExpanded] = useLocalStorage<Record<string,any>>(storageKey,{});//define expanded const state.

    //destrucure organization values from useOrganization hook
    const {organization:activeOrganization,
        isLoaded:isLoadedOrg
    } = useOrganization();

    const {userMemberships,
        isLoaded:isLoadedOrgList}= useOrganizationList({
            userMemberships:{
                infinite:true,
            }
        });
     
    // load all the keys that is expanded=true meaning, {"123":id} => ["123"]
    const defaultAccordianValue:string[]= Object.keys(expanded)
    .reduce((acc:string[],key:string)=>{
        if(expanded[key]){
            acc.push(key);
        }

        return acc;
    },[]);

    // toggle key state 
    const onExpand = (id:string)=>{
        setExpanded((curr)=>({
                ...curr,
                [id]: !expanded[id],
            })
        )
    }

    //render skeleton view when loading 
    if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading){
        return(
            <>
                <Skeleton/>
            </>
        )
    }
    
    return(
        <>
        <div className="font-medium text-xs items-center mb-1 border-r dark:bg-app-dark-navbar bg-white">
            <div className="flex justify-between items-center">
                <span className="">
                Workspaces
            </span>
            <Button
            asChild
            type="button"
            size="icon"
            variant="ghost"
            className="ml-auto">
                <Link href="/select-org">
                    <Plus className="h-4 w-4"/>
                </Link>
            </Button>
            </div>
            <Accordion 
                type="multiple"
                defaultValue={defaultAccordianValue}
                className="space-y-2"
                >
                    {userMemberships.data.map(({ organization})=>(
                        <p key={organization.id}>
                            {organization.id}
                        </p>
                    ))}
                </Accordion>
        </div>
        </>
    )
}