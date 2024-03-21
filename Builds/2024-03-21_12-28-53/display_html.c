#include <gtk/gtk.h>
#include <webkit2/webkit2.h>

static void destroy_window(GtkWidget *widget, gpointer data) {
    gtk_main_quit();
}

int main(int argc, char *argv[]) {
    gtk_init(&argc, &argv);

    GtkWidget *window = gtk_window_new(GTK_WINDOW_TOPLEVEL);
    gtk_window_set_default_size(GTK_WINDOW(window), 800, 600);
    g_signal_connect(window, "destroy", G_CALLBACK(destroy_window), NULL);

    WebKitWebView *webView = WEBKIT_WEB_VIEW(webkit_web_view_new());
    gtk_container_add(GTK_CONTAINER(window), GTK_WIDGET(webView));

    // Load HTML content directly
    const gchar *html_content = "<html><body><h1>Hello, World!</h1></body></html>";
    webkit_web_view_load_html(webView, html_content, NULL);

    gtk_widget_show_all(window);
    gtk_main();

    return 0;
}
