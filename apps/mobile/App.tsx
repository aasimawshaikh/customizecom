import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const occasions = ["Birthday", "Anniversary", "Wedding", "Just because"];
const recipients = ["Her", "Him", "Partner", "Friend", "Family"];

export default function App() {
  const [occasion, setOccasion] = useState("Birthday");
  const [recipient, setRecipient] = useState("Her");
  const [name, setName] = useState("");

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.nav}>
          <View style={styles.mark}><Text style={styles.markText}>c.</Text></View>
          <Text style={styles.brand}>customizecom</Text>
        </View>
        <Text style={styles.eyebrow}>GIFTING, MADE PERSONAL</Text>
        <Text style={styles.title}>Not just a gift.{"\n"}<Text style={styles.italic}>A little piece of you.</Text></Text>
        <Text style={styles.description}>Tell us about someone special. Build a hamper around their personality, your story, and the little things they love.</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Who are we celebrating?</Text>
          <Text style={styles.label}>The occasion</Text>
          <View style={styles.wrap}>
            {occasions.map((item) => (
              <TouchableOpacity key={item} style={[styles.chip, occasion === item && styles.selected]} onPress={() => setOccasion(item)}>
                <Text style={[styles.chipText, occasion === item && styles.selectedText]}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.label}>Who is it for?</Text>
          <View style={styles.wrap}>
            {recipients.map((item) => (
              <TouchableOpacity key={item} style={[styles.chip, recipient === item && styles.selected]} onPress={() => setRecipient(item)}>
                <Text style={[styles.chipText, recipient === item && styles.selectedText]}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.label}>Their name (optional)</Text>
          <TextInput value={name} onChangeText={setName} placeholder="e.g. Rabia" maxLength={80} style={styles.input} />
          <TouchableOpacity style={styles.button} onPress={() => alert(`Next: create a ${occasion.toLowerCase()} hamper for ${name.trim() || recipient}. The builder flow is not implemented yet.`)}>
            <Text style={styles.buttonText}>Start creating your gift  ↗</Text>
          </TouchableOpacity>
          <Text style={styles.note}>No ready-made hampers. Every gift starts with you.</Text>
        </View>
        <Text style={styles.footer}>Made with thought. Given with love.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fbf6f0" },
  container: { padding: 24, paddingBottom: 40 },
  nav: { flexDirection: "row", alignItems: "center", marginBottom: 42, gap: 10 },
  mark: { width: 36, height: 36, borderRadius: 18, backgroundColor: "#8c4356", alignItems: "center", justifyContent: "center" },
  markText: { color: "#fff", fontSize: 22, fontWeight: "600" },
  brand: { color: "#332923", fontSize: 20, fontWeight: "700" },
  eyebrow: { color: "#8c4356", fontSize: 11, letterSpacing: 2, fontWeight: "700", marginBottom: 18 },
  title: { color: "#332923", fontSize: 39, lineHeight: 47, fontWeight: "500", marginBottom: 18 },
  italic: { color: "#8c4356", fontStyle: "italic" },
  description: { color: "#766b64", fontSize: 15, lineHeight: 24, marginBottom: 28 },
  card: { backgroundColor: "#fffdfa", borderColor: "#e8dcd2", borderWidth: 1, borderRadius: 16, padding: 20 },
  cardTitle: { color: "#332923", fontSize: 23, marginBottom: 12, fontWeight: "600" },
  label: { color: "#554940", fontSize: 12, fontWeight: "700", marginTop: 16, marginBottom: 9 },
  wrap: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  chip: { paddingVertical: 10, paddingHorizontal: 12, borderRadius: 8, backgroundColor: "#fff", borderColor: "#e8dcd2", borderWidth: 1 },
  selected: { backgroundColor: "#f8eaf0", borderColor: "#c78b9d" },
  chipText: { color: "#61544d", fontSize: 12 },
  selectedText: { color: "#733448", fontWeight: "700" },
  input: { backgroundColor: "#fff", borderColor: "#e8dcd2", borderWidth: 1, borderRadius: 8, padding: 12, fontSize: 14 },
  button: { backgroundColor: "#8c4356", borderRadius: 8, padding: 15, alignItems: "center", marginTop: 22 },
  buttonText: { color: "#fff", fontSize: 13, fontWeight: "700" },
  note: { color: "#887b72", fontSize: 10, textAlign: "center", marginTop: 13 },
  footer: { color: "#766b64", fontSize: 12, textAlign: "center", marginTop: 32 },
});
