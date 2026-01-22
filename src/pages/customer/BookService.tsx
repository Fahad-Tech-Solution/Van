import DashboardLayout from '@/components/layouts/DashboardLayout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'

const BookService = () => {
  return (
    <DashboardLayout role="customer">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Book Moving Service</h2>
          <p className="text-muted-foreground">
            Get an instant price and book your moving service directly.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Prefer to Book Directly?</CardTitle>
            <CardDescription>
              You can also book directly on the Local Van website
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <a
                href="https://local-van.com/instant-price/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Open Booking Page in New Tab
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

export default BookService
