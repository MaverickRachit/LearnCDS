
'use client';

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Moon, Sun, User as UserIcon, Palette, Trophy } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from './ui/dropdown-menu';
import { useTheme } from 'next-themes';
import { useUserProgress } from '@/hooks/use-user-progress';
import Link from 'next/link';

export const UserNav = () => {
    const { setTheme } = useTheme();
    const { progress } = useUserProgress();

    return (
      <DropdownMenu>
          <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                        src={`https://api.dicebear.com/8.x/bottts/svg?seed=${progress?.name || 'user'}`}
                        alt="User avatar"
                    />
                    <AvatarFallback>{progress?.name?.[0].toUpperCase() || 'U'}</AvatarFallback>
                </Avatar>
              </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Welcome, {progress?.name || 'Aspirant'}!</p>
                  <p className="text-xs leading-none text-muted-foreground">
                  Ready to learn?
                  </p>
              </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <Link href="/progress" passHref>
                    <DropdownMenuItem>
                        <Trophy className="mr-2 h-4 w-4" />
                        <span>My Progress</span>
                    </DropdownMenuItem>
                </Link>
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        <Palette className="mr-2 h-4 w-4" />
                        <span>Theme</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                        <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
                    </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
               <DropdownMenuItem>
                Settings
              </DropdownMenuItem>
      </DropdownMenuContent>
      </DropdownMenu>
    );
}

UserNav.displayName = "UserNav";
