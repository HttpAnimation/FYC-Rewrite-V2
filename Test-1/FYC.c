#include <gtk/gtk.h>

// Callback function to handle closing the window
void on_window_closed(GtkWidget *widget, gpointer data) {
    gtk_main_quit();
}

int main(int argc, char *argv[]) {
    // Initialize GTK
    gtk_init(&argc, &argv);

    // Create the main window
    GtkWidget *window = gtk_window_new(GTK_WINDOW_TOPLEVEL);
    gtk_window_set_title(GTK_WINDOW(window), "FYC");
    gtk_window_set_default_size(GTK_WINDOW(window), 800, 600);
    g_signal_connect(window, "destroy", G_CALLBACK(on_window_closed), NULL);

    // Create a vertical box container
    GtkWidget *vbox = gtk_box_new(GTK_ORIENTATION_VERTICAL, 0);
    gtk_container_add(GTK_CONTAINER(window), vbox);

    // Sidebar
    GtkWidget *sidebar = gtk_box_new(GTK_ORIENTATION_VERTICAL, 0);
    gtk_widget_set_size_request(sidebar, 200, -1); // Set fixed width for sidebar
    gtk_box_pack_start(GTK_BOX(vbox), sidebar, FALSE, FALSE, 0);

    // Sidebar title
    GtkWidget *sidebar_title = gtk_label_new("FYC");
    gtk_label_set_xalign(GTK_LABEL(sidebar_title), 0.5); // Align text to center
    gtk_box_pack_start(GTK_BOX(sidebar), sidebar_title, FALSE, FALSE, 10);

    // Sidebar buttons
    const gchar *button_labels[] = {
        "Updates",
        "Donate",
        "Versions",
        "Mods",
        "Credits",
        "Q&A",
        "Request a torrent",
        "Report a torrent",
        "Movies",
        "TV",
        "Music",
        "Videogame Videos",
        "EBooks",
        "Other",
        "ISO's",
        "3DS",
        "WiiU",
        "Nintendo 64",
        "PlayStation Portable",
        "Windows Apps",
        "Windows Games",
        "Linux",
        "macOS"
    };

    GtkWidget *button;
    for (int i = 0; i < G_N_ELEMENTS(button_labels); i++) {
        button = gtk_button_new_with_label(button_labels[i]);
        gtk_box_pack_start(GTK_BOX(sidebar), button, FALSE, FALSE, 5);
    }

    // Content area
    GtkWidget *content_area = gtk_box_new(GTK_ORIENTATION_VERTICAL, 0);
    gtk_box_pack_start(GTK_BOX(vbox), content_area, TRUE, TRUE, 0);

    // Show all widgets
    gtk_widget_show_all(window);

    // Run the GTK main loop
    gtk_main();

    return 0;
}
