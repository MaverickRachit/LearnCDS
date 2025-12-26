
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Suspense, useState, useCallback } from 'react';
import { Skeleton } from '@/components/ui/skeleton';


function PdfListSkeleton() {
    return (
        <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-2">
                        <Skeleton className="h-5 w-48" />
                        <Skeleton className="h-4 w-24" />
                    </div>
                    <Skeleton className="h-10 w-24" />
                </div>
            ))}
        </div>
    )
}

export default function DocumentsPage() {
  
  return (
    <div className="space-y-6">
       <div className="mb-6">
        <h1 className="text-3xl font-bold">Documents</h1>
        <p className="text-muted-foreground">
          Browse and view the available PDF study materials.
        </p>
      </div>

       <Card>
        <CardHeader>
          <CardTitle>Available Documents</CardTitle>
          <CardDescription>
            This section is now a placeholder. PDF viewing functionality will be restored in a future update.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <Suspense fallback={<PdfListSkeleton />}>
                 <div className="flex items-center justify-center h-24 text-muted-foreground">
                    <p>Static documents will be available here.</p>
                 </div>
            </Suspense>
        </CardContent>
      </Card>
    </div>
  );
}
